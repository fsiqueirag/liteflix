import React from 'react';

export const DropdownMenu = ({ selectedCategory, setSelectedCategory, myMovies }) => {

    return (
        <ul className='movies__dropdown'>
            <span className="fas fa-caret-up"></span>
            <li
                onClick={() => setSelectedCategory('top')}
                className={selectedCategory === 'top' ? 'selected' : null}
            >
                Populares
                {
                    selectedCategory === 'top'
                    &&
                    <span className="fas fa-check" />
                }
            </li>
            <li
                onClick={() => setSelectedCategory('myMovies')}
                className={myMovies.length > 0 ? (selectedCategory === 'myMovies' ? 'selected' : null) : 'disabled'}
            >
                Mis películas
                {
                    selectedCategory === 'myMovies'
                    &&
                    <span className="fas fa-check" />
                }
            </li>
        </ul >
    )
}
