import React from 'react';

export const HomeButtons = () => {
    return (
        <div className="home__buttons">
            <button className="home__play">
                <ion-icon name="play-outline" className="movies__play-icon"></ion-icon>
                <span>REPRODUCIR</span>
            </button>
            <button className="home__my-list">
                <div className="home__my-list-border-top" />
                <div className="home__my-list-border-bottom" />
                <div className="home__my-list-border-left" />
                <div className="home__my-list-border-right" />
                <p><span>+</span> MI LISTA</p>
            </button>
        </div>
    )
}
