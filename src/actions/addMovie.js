import { types } from "../types/types";


export const startUploadingFile = () => {
    return {
        type: types.startUploadingFile
    }
};

export const finishUploadingFile = () => {
    return {
        type: types.finishUploadingFile
    }
};

export const movieUploaded = () => {
    return {
        type: types.movieUploaded
    }
};

export const movieSaved = () => {
    return {
        type: types.movieSaved
    }
};

export const uploadFailed = () => {
    return {
        type: types.uploadFailed
    }
};

export const retryUpload = () => {
    return {
        type: types.retryUpload
    }
};

