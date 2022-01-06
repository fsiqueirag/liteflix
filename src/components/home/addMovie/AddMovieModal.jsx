import React, { useContext, useReducer, useState } from 'react';
import { movieSaved, startUploadingFile } from '../../../actions/addMovie';
import { addMovieReducer } from '../../../reducers/addMovieReducer';
import { MoviesContext } from '../../../context/MoviesContext';
import { uploadFailed } from '../../../actions/addMovie';
import { AddFile } from './AddFile';
import { FailedUpload } from './FailedUpload';
import { LoadingFile } from './LoadingFile';
import { SavedMovie } from './SavedMovie';
import { MovieUploaded } from './MovieUploaded';

const initialState = {
    uploading: false,
    uploaded: false,
    failed: false,
    saved: false
};

export const AddMovieModal = ({ myMovies, setMyMovies }) => {

    const { setShowAddMovieModal } = useContext(MoviesContext);

    const [{ uploading, uploaded, failed, saved }, dispatch] = useReducer(addMovieReducer, initialState);

    const [newImage, setNewImage] = useState(null);
    const [newMovie, setNewMovie] = useState({
        imageUrl: '',
        title: ''
    });

    const { title } = newMovie;

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if (file.type.includes('image')) {
            setNewImage(file);
            dispatch(startUploadingFile());
        } else {
            dispatch(uploadFailed());
        }
    }

    const handleChangeTitle = (e) => {
        setNewMovie({
            ...newMovie,
            title: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (myMovies.length > 0) {
            localStorage.setItem("myMovies", JSON.stringify([newMovie, ...myMovies]));
            setMyMovies([newMovie, ...myMovies]);
        } else {
            localStorage.setItem("myMovies", JSON.stringify([newMovie]));
            setMyMovies([newMovie]);
        }

        dispatch(movieSaved());
    }

    const handleCloseModal = () => {
        setShowAddMovieModal(false);
    }

    return (
        <div className="add-movie__container">
            <form
                className="add-movie__card"
                onSubmit={handleSubmit}
            >
                <button
                    type="button"
                    onClick={() => setShowAddMovieModal(false)}
                    className="add-movie__close">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                {
                    saved
                        ?
                        <SavedMovie title={title} handleCloseModal={handleCloseModal} />
                        :
                        (
                            <>
                                <h3>Agregar película</h3>
                                {
                                    uploaded
                                        ?
                                        (
                                            <MovieUploaded />
                                        )
                                        :
                                        (
                                            uploading
                                                ?
                                                <LoadingFile
                                                    dispatch={dispatch}
                                                    setNewMovie={setNewMovie}
                                                    newImage={newImage}
                                                    newMovie={newMovie}
                                                />
                                                :
                                                (
                                                    failed
                                                        ?
                                                        <FailedUpload dispatch={dispatch} />
                                                        :
                                                        <AddFile
                                                            handleFileChange={handleFileChange}
                                                            newMovie={newMovie}
                                                        />
                                                )
                                        )
                                }
                                <input
                                    type="text"
                                    className="add-movie__movie-title"
                                    placeholder={'Título'}
                                    onChange={handleChangeTitle}
                                    value={title}
                                    required
                                    disabled={uploading}
                                />
                                <div className="add-movie__buttons">
                                    <button
                                        className="add-movie__submit"
                                        type="submit"
                                        disabled={!(uploaded && title.length > 0)}
                                    >
                                        Subir película
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddMovieModal(false)}
                                        className="add-movie__close-mobile"
                                    >
                                        Salir
                                    </button>
                                </div>
                            </>
                        )
                }

            </form>
        </div>
    )
}
