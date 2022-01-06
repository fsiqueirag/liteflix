import React, { useEffect, useState } from 'react';
import { useIsMounted } from '../../hooks/useIsMounted';

export const MovieCard = ({ imageUrl, title, index, cardsFirstLoad, setCardsFirstLoad }) => {

    const isMounted = useIsMounted();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        return () => {
            setCardsFirstLoad(false);
        }
    }, [setCardsFirstLoad]);

    const handleResize = () => {
        if (isMounted()) {
            setWindowWidth(window.innerWidth);
        }
    }

    window.addEventListener('resize', handleResize);

    return (
        <div
            className={`movie-card__container 
            ${cardsFirstLoad
                    ?
                    `movie-card__container-${index}`
                    :
                    `movie-card__container-fast-${index}`}`
            }
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="movie-card__play-icon">
                <div className="movie-card__filled-icon">
                    <ion-icon name="play" />
                </div>
                <div className="movie-card__outline-icon">
                    <ion-icon name="play-outline" />
                </div>
            </div>
            <div className="movie-card__title-container">
                <h3>
                    <span>
                        {
                            windowWidth >= 768
                                ?
                                (
                                    title.length > 10
                                        ?
                                        `${title.slice(0, 10)}...`
                                        :
                                        title
                                )
                                :
                                (title.length > 20
                                    ?
                                    `${title.slice(0, 20)}...`
                                    :
                                    title
                                )
                        }
                    </span>
                </h3>
            </div>
            <footer>
                <div className="movie-card__rating"><span className="fas fa-star" />7.9</div>
                <span className="movie-card__year">2018</span>
            </footer>
        </div>
    )
}
