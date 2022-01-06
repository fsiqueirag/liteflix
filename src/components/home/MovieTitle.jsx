import React from 'react';

export const MovieTitle = ({ title }) => {

    const slicedTitle = title.split(' ');
    const titleLength = title.length >= 28 ? 'big-title' : (title.length >= 15 ? 'medium-title' : 'small-title');

    return (
        <h1
            className={`home__movie-title ${titleLength}`}
        >
            {
                slicedTitle.map((word, i) => {

                    const wordLength = word.length >= 9 && 'big-word';

                    return (
                        <span
                            className={wordLength || null}
                            key={i}
                            style={{
                                animation: `fade${i % 2 === 0 ? 'down' : 'up'} 600ms ${1000 + (i + (i * 150))}ms ease backwards`,
                            }}
                        >
                            {word}
                        </span>
                    )
                })
            }
        </h1>
    )
}
