import React from 'react';

export const AddFile = ({ handleFileChange }) => {

    return (
        <>
            <div
                className="add-movie__file-container"
            >
                <p><span className="fas fa-paperclip" />Agregá un archivo<span> o arrastralo y soltalo aquí</span></p>
                <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" required />
            </div>
        </>
    )
}
