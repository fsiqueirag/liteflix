import { types } from "../types/types";

const initialState = {
    uploading: false,
    uploaded: false,
    failed: false,
    saved: false
};

export const addMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.startUploadingFile:
            return {
                ...state,
                uploading: true
            }

        case types.finishUploadingFile:
            return {
                ...state,
                uploading: false
            }

        case types.movieUploaded:
            return {
                ...state,
                uploaded: true,
                uploading: false
            }

        case types.movieSaved:
            return {
                ...state,
                saved: true,
                uploading: false
            }

        case types.uploadFailed:
            return {
                ...state,
                failed: true,
                uploading: false
            }

        case types.retryUpload:
            return {
                ...state,
                failed: false
            }

        default:
            return state;
    }
}