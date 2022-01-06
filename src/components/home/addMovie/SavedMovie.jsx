import React from 'react';

export const SavedMovie = ({ title, handleCloseModal }) => {
    return (
        <>
            <div className="navbar__logo add-movie__logo">
                <p>
                    <span className="navbar__logo-start">LITE</span>
                    <span className="navbar__logo-end">FLIX</span>
                </p>
            </div>
            <div>
                <p className="add-movie__congrats">¡Felicitaciones!</p>
                <p className="add-movie__description">{title} fue correctamente subida.</p>
            </div>
            <button
                className="add-movie__submit add-movie__uploaded"
                type="button"
                onClick={handleCloseModal}
            >
                Ir a Home
            </button>
        </>
    )
}
