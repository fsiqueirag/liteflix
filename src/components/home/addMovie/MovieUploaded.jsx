import React from 'react';

export const MovieUploaded = () => {
    return (
        <div className="add-movie__loading-container">
            <p>100% Cargado</p>
            <div className="add-movie__loading-bar-container">
                <div
                    className="add-movie__loading-bar"
                />
            </div>
            <p className="add-movie__ready">¡Listo!</p>
        </div>
    )
}
