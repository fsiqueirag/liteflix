import React from 'react';
import { retryUpload } from '../../../actions/addMovie';

export const FailedUpload = ({ dispatch }) => {

    const handleRetry = () => {
        dispatch(retryUpload());
    }

    return (
        <div className="add-movie__loading-container add-movie__loading-failed">
            <p>¡ERROR! <span>No se pudo cargar la película</span></p>
            <div className="add-movie__loading-bar-container">
                <div
                    className="add-movie__loading-bar"
                    style={{ width: `100%` }}
                />
            </div>
            <button type="button" onClick={handleRetry}>Reintentar</button>
        </div>
    )
}
